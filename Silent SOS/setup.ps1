# Setup script for gesture detection project
# Run this in PowerShell to set up everything

Write-Host "Setting up virtual environment..."
python -m venv .venv

Write-Host "Activating virtual environment..."
.\.venv\Scripts\Activate.ps1

Write-Host "Installing packages..."
pip install --upgrade pip
pip install -r requirements.txt

Write-Host "Setup complete!"
Write-Host "To run the program: python src/gesture.py"
Write-Host "To tune HSV values: python src/tools/hsv_tuner.py"