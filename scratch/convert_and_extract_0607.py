import os
import subprocess
import fitz  # PyMuPDF

docx_path = "/Users/jun/Library/CloudStorage/GoogleDrive-pastorjun2025@gmail.com/My Drive/01. Conklin UMC/01. Worship/0607 Inherit the Wind/0607 Conklin Sunday Bulletin.docx"
pdf_path = "/Users/jun/Library/CloudStorage/GoogleDrive-pastorjun2025@gmail.com/My Drive/01. Conklin UMC/website/scratch/0607_bulletin.pdf"
output_dir = "/Users/jun/Library/CloudStorage/GoogleDrive-pastorjun2025@gmail.com/My Drive/01. Conklin UMC/website/public/bulletins/0607"

# Step 1: Convert docx to pdf using AppleScript
applescript = f'''
tell application "Microsoft Word"
    open posix file "{docx_path}"
    set activeDoc to active document
    save as activeDoc file name "{pdf_path}" file format format PDF
    close activeDoc saving no
end tell
'''

print("Converting docx to pdf via Microsoft Word AppleScript...")
subprocess.run(["osascript", "-e", applescript], check=True)
print("PDF conversion completed.")

# Step 2: Extract pages to JPEGs
print("Extracting pages from PDF to JPEGs...")
os.makedirs(output_dir, exist_ok=True)
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")
for i, page in enumerate(doc):
    zoom = 2.0  # 2x zoom for better quality
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat)
    
    output_path = os.path.join(output_dir, f"bulletin-0607-page{i+1}.jpg")
    pix.save(output_path)
    print(f"Saved {output_path}")

doc.close()

# Clean up temp PDF
if os.path.exists(pdf_path):
    os.remove(pdf_path)
print("All tasks completed successfully!")
