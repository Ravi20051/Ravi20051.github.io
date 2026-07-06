import os
import shutil
import sys

def clean_filename(name):
    base = os.path.splitext(name)[0]
    if "_certificate_" in base:
        base = base.split("_certificate_")[0]
    base = base.replace(" - ", "_").replace(" ", "_").replace("-", "_").lower()
    while "__" in base:
        base = base.replace("__", "_")
    return base + ".pdf"

def process_certificates():
    try:
        from pypdf import PdfReader, PdfWriter
    except ImportError:
        print("pypdf is not installed. Installing it now...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
        from pypdf import PdfReader, PdfWriter

    cert_dir = "certificate"
    public_dir = "public"
    certs_dest_dir = os.path.join(public_dir, "certificates")
    merged_output_file = os.path.join(public_dir, "all_certificates.pdf")

    # Ensure directories exist
    os.makedirs(certs_dest_dir, exist_ok=True)

    if not os.path.exists(cert_dir):
        print(f"Error: Directory '{cert_dir}' does not exist.")
        return

    # Get all PDF files
    pdf_files = [f for f in os.listdir(cert_dir) if f.lower().endswith(".pdf")]
    
    if not pdf_files:
        print(f"No PDF files found in '{cert_dir}'.")
        return

    # Sort files alphabetically to keep a stable merge order
    pdf_files.sort()

    print(f"Found {len(pdf_files)} certificates. Processing...")
    
    writer = PdfWriter()
    added_count = 0

    for f in pdf_files:
        src_path = os.path.join(cert_dir, f)
        dest_name = clean_filename(f)
        dest_path = os.path.join(certs_dest_dir, dest_name)
        
        # 1. Copy individual file
        try:
            shutil.copy(src_path, dest_path)
            print(f"  Copied: {f} -> {dest_name}")
        except Exception as e:
            print(f"  Error copying {f}: {e}")

        # 2. Merge page
        try:
            reader = PdfReader(src_path)
            for page in reader.pages:
                writer.add_page(page)
            added_count += 1
            print(f"  Merged page(s) of: {f}")
        except Exception as e:
            print(f"  Error merging {f}: {e}")

    # Write merged file
    if added_count > 0:
        try:
            with open(merged_output_file, "wb") as out_fp:
                writer.write(out_fp)
            writer.close()
            print(f"\nSuccess! Merged {added_count} files into: {merged_output_file}")
        except Exception as e:
            print(f"\nError writing merged file: {e}")
    else:
        print("\nError: No files merged.")

if __name__ == "__main__":
    process_certificates()
