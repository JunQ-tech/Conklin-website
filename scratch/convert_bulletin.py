import fitz  # PyMuPDF
import os

pdf_path = "/Users/jun/Library/CloudStorage/GoogleDrive-pastorjun2025@gmail.com/My Drive/01. Conklin UMC/0510 In God's time/0510 Conklin Sunday Bulletin.pdf"
output_dir = "public/bulletins/0510"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
for i, page in enumerate(doc):
    # Higher resolution (300 DPI)
    zoom = 2.0  # 2x zoom for better quality
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat)
    
    # Page 1 is Inside, Page 2 is Outside
    name = "inside" if i == 0 else "outside"
    output_path = os.path.join(output_dir, f"bulletin-0510-{name}.jpg")
    pix.save(output_path)
    print(f"Saved {output_path}")

doc.close()
