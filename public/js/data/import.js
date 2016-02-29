var defaultImportData = ["NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNYYYNYNNYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNYYYNYNNYYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYNNNNNNYNYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYNNNNNYYYYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNNYYYYYYYYYYYYYYYYYYYYNYYYYYYNNNYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNNYYYYYYYYYYYYYYYYYYYYYNYYYYYYYNNNYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNNNNNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYNYYYYYYYNNNYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNYNNNNNNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYNYYYYYYYNNNYYYYYYYYYYYYYYYYYYYYYYNNNYYNNNYYNNNNNNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYNNYYYYYYYNNNYYYYYYYYYYYYYYYYYYYYYYYNYYYYYYYYNNNNNNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYNYYYYYYNNNNYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYNNYYYNNNYNNNNYNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNYYNNNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNY",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNYNNNN",
    "NNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNN",
    "NNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNN",
    "NNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNN",
    "NNNYYYNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNN",
    "NNYYYNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNYNNNN",
    "NNYYNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNNYNNNNN",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNYYYYYYY",
    "NNYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYNNNYYYYYYY",
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYYYYNN",
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYNNNNY",
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYYYNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNYYNNNNY"];