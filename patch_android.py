#!/usr/bin/env python3
"""Aplica ícones, splash, tema escuro, permissões e versão no projeto Android gerado pelo Capacitor."""
import os, re, shutil, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RES = os.path.join(ROOT, "android", "app", "src", "main", "res")
MAN = os.path.join(ROOT, "android", "app", "src", "main", "AndroidManifest.xml")
GRADLE = os.path.join(ROOT, "android", "app", "build.gradle")

if not os.path.isdir(RES):
    sys.exit("Pasta android/ não encontrada. Rode 'npx cap add android' antes.")

# 1) ícones do app (launcher + adaptive)
for d in ("drawable-v24/ic_launcher_foreground.xml", "drawable/ic_launcher_background.xml"):
    p = os.path.join(RES, d)
    if os.path.exists(p):
        os.remove(p)
src = os.path.join(ROOT, "resources", "res")
for dp, _, files in os.walk(src):
    for f in files:
        rel = os.path.relpath(os.path.join(dp, f), src)
        dst = os.path.join(RES, rel)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(os.path.join(dp, f), dst)
print("ícones aplicados")

# 2) splash escura
n = 0
for p in glob.glob(os.path.join(RES, "drawable*", "splash.png")):
    land = "land" in os.path.basename(os.path.dirname(p))
    shutil.copyfile(os.path.join(ROOT, "resources", "splash", "splash_land.png" if land else "splash_port.png"), p)
    n += 1
print("splash:", n, "arquivos")

# 3) tema (barra de status / navegação escuras)
sty = os.path.join(RES, "values", "styles.xml")
if os.path.exists(sty):
    s = open(sty, encoding="utf-8").read()
    extra = ('\n        <item name="android:statusBarColor">#07040F</item>'
             '\n        <item name="android:navigationBarColor">#07040F</item>'
             '\n        <item name="android:windowBackground">#07040F</item>'
             '\n        <item name="android:windowLightStatusBar">false</item>')
    s2 = re.sub(r'(<style name="AppTheme\.NoActionBar"[^>]*>)', lambda m: m.group(1) + extra, s, count=1)
    open(sty, "w", encoding="utf-8").write(s2)
    print("tema aplicado" if s2 != s else "AVISO: tema não alterado")

# 4) manifesto: permissões + orientação retrato
m = open(MAN, encoding="utf-8").read()
perms = [
    '<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />',
    '<uses-permission android:name="android.permission.VIBRATE" />',
    '<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />',
    '<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" android:maxSdkVersion="32" />',
    '<uses-permission android:name="android.permission.USE_EXACT_ALARM" />',
]
add = "".join("\n    " + p for p in perms if p.split('"')[1] not in m)
m = m.replace("</manifest>", add + "\n</manifest>")
if "screenOrientation" not in m:
    m = m.replace("<activity", '<activity\n            android:screenOrientation="portrait"', 1)
open(MAN, "w", encoding="utf-8").write(m)
print("manifesto atualizado")

# 5) versão
run = os.environ.get("GITHUB_RUN_NUMBER", "1")
g = open(GRADLE, encoding="utf-8").read()
g = re.sub(r"versionCode\s+\d+", f"versionCode {run}", g, count=1)
g = re.sub(r'versionName\s+"[^"]*"', f'versionName "1.0.{run}"', g, count=1)
open(GRADLE, "w", encoding="utf-8").write(g)
print("versão 1.0." + run)
