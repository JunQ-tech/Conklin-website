import qrcode
qr = qrcode.QRCode(version=1, box_size=20, border=2)
qr.add_data('https://conklinchurch.org')
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save("public/qrcode-conklin.png")
print("QR Code generated at public/qrcode-conklin.png")
