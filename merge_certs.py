import os

def merge_pdfs():
    try:
        from pypdf import PdfMerger
    except ImportError:
        print("pypdf is not installed. Installing it now...")
        import subprocess
        subprocess.check_call(["pip", "install", "pypdf"])
        from pypdf import PdfMerger

    cert_dir = "certificate"
    output_dir = "public"
    output_file = os.path.join(output_dir, "all_certificates.pdf")

    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)

    files = [
        "Introduction_to_Data_Science_certificate_vailaravi2005-gmail-com_d03882aa-4fe6-408e-95ce-8b08f078f6e2.pdf",
        "Python_Essentials_1_certificate_vailaravi2005-gmail-com_cadd4c2b-d8fc-498d-b36b-9092fb6446db.pdf",
        "Python_Essentials_2_certificate_vailaravi2005-gmail-com_be077a05-19a5-450b-9b7c-ad555fe99792.pdf",
        "Data_Analytics_Essentials_certificate_vailaravi2005-gmail-com_89b93ab5-81d0-479f-b0d0-38ed60bce829.pdf"
    ]

    merger = PdfMerger()
    added_count = 0

    for f in files:
        path = os.path.join(cert_dir, f)
        if os.path.exists(path):
            print(f"Adding: {f}")
            merger.append(path)
            added_count += 1
        else:
            print(f"Warning: File not found {path}")

    if added_count > 0:
        merger.write(output_file)
        merger.close()
        print(f"\nSuccess! Merged {added_count} certificates into: {output_file}")
    else:
        print("\nError: No certificate files found in the 'certificate' directory.")

if __name__ == "__main__":
    merge_pdfs()
