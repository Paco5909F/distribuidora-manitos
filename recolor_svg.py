import re

file_path = '/home/rogelio/Desktop/Manitos/public/pattern.svg'
with open(file_path, 'r') as f:
    content = f.read()

# Remove the background path (line 3 roughly)
# <path ... fill="#3B322D" .../>
content = re.sub(r'<path [^>]*fill="#3B322D"[^>]*/>', '', content)

# Find all other fill colors
fills = set(re.findall(r'fill="([^"]+)"', content))

# Map colors to blue shades
# Sky blue is #0EA5E9
# We can use a few shades:
# Darker: #0284C7
# Base: #0EA5E9
# Lighter: #7DD3FC
# Faintest: #BAE6FD

for fill in fills:
    # Very simple mapping: if it's light (starts with F), make it very light blue
    # If it's orange-ish (starts with E), make it base blue
    if fill.startswith('#F'):
        content = content.replace(f'fill="{fill}"', 'fill="#BAE6FD" opacity="0.4"')
    elif fill.startswith('#E'):
        content = content.replace(f'fill="{fill}"', 'fill="#0EA5E9" opacity="0.6"')
    else:
        content = content.replace(f'fill="{fill}"', 'fill="#0284C7" opacity="0.5"')

with open(file_path, 'w') as f:
    f.write(content)
