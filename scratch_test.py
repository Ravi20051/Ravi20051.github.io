import sys
try:
    import pypdf
    print("pypdf")
except ImportError:
    try:
        import PyPDF2
        print("PyPDF2")
    except ImportError:
        print("None")
