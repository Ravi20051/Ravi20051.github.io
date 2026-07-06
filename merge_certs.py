import os
import shutil

def process_certificates():
    try:
        from pypdf import PdfMerger
    except ImportError:
        print("pypdf is not installed. Installing it now...")
        import subprocess
        subprocess.check_call(["pip", "install", "pypdf"])
        from pypdf import PdfMerger

    cert_dir = "certificate"
    public_dir = "public"
    certs_dest_dir = os.path.join(public_dir, "certificates")
    merged_output_file = os.path.join(public_dir, "all_certificates.pdf")

    # Ensure directories exist
    os.makedirs(certs_dest_dir, exist_ok=True)

    # Dictionary mapping original filenames to clean public filenames
    files_map = {
        "Introduction_to_Data_Science_certificate_vailaravi2005-gmail-com_d03882aa-4fe6-408e-95ce-8b08f078f6e2.pdf": "intro_data_science.pdf",
        "Python_Essentials_1_certificate_vailaravi2005-gmail-com_cadd4c2b-d8fc-498d-b36b-9092fb6446db.pdf": "python_essentials_1.pdf",
        "Python_Essentials_2_certificate_vailaravi2005-gmail-com_be077a05-19a5-450b-9b7c-ad555fe99792.pdf": "python_essentials_2.pdf",
        "Data_Analytics_Essentials_certificate_vailaravi2005-gmail-com_89b93ab5-81d0-479f-b0d0-38ed60bce829.pdf": "data_analytics_essentials.pdf"
    }

    # 1. Copy individual files to public/certificates/
    print("Copying individual certificates...")
    for src_name, dest_name in files_map.items():
        src_path = os.path.join(cert_dir, src_name)
        dest_path = os.path.join(certs_dest_dir, dest_name)
        if os.path.exists(src_path):
            shutil.copy(src_path, dest_path)
            print(f"  Copied to {dest_path}")
        else:
            print(f"  Warning: Source file not found {src_path}")

    # 2. Merge all certificates
    print("\nMerging all certificates...")
    merger = PdfMerger()
    added_count = 0

    # Order of merged pages
    merge_order = [
        "Introduction_to_Data_Science_certificate_vailaravi2005-gmail-com_d03882aa-4fe6-408e-95ce-8b08f078f6e2.pdf",
        "Python_Essentials_1_certificate_vailaravi2005-gmail-com_cadd4c2b-d8fc-498d-b36b-9092fb6446db.pdf",
        "Python_Essentials_2_certificate_vailaravi2005-gmail-com_be077a05-19a5-450b-9b7c-ad555fe99792.pdf",
        "Data_Analytics_Essentials_certificate_vailaravi2005-gmail-com_89b93ab5-81d0-479f-b0d0-38ed60bce829.pdf"
    ]

    for f in merge_order:
        path = os.path.join(cert_dir, f)
        if os.path.exists(path):
            merger.append(path)
            added_count += 1
            print(f"  Merged: {f}")

    if added_count > 0:
        merger.write(merged_output_file)
        merger.close()
        print(f"\nSuccess! Merged {added_count} files into: {merged_output_file}")
    else:
        print("\nError: No files merged.")

if __name__ == "__main__":
    process_certificates()
