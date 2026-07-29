import os

paths_to_check = [
    r'C:\Users\MGR-TANTAWY\Desktop\عرض سعر العميل',
    r'C:\Users\MGR-TANTAWY\Desktop',
    r'C:\Users\MGR-TANTAWY\Desktop\عرض سعر العميل\APP'
]

print("Searching for logo files...")
found = []

for p in paths_to_check:
    if os.path.exists(p):
        for f in os.listdir(p):
            full = os.path.join(p, f)
            if os.path.isfile(full):
                name_lower = f.lower()
                if 'logo' in name_lower or 'bg' in name_lower or 'شعار' in f:
                    found.append((full, os.path.getsize(full)))

for f, sz in found:
    print(f"FOUND: {f} ({sz} bytes)")
