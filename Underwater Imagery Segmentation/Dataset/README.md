# Semantic Segmentation of Underwater Imagery (SUIM) Dataset

## Dataset Overview

The SUIM dataset is designed for semantic segmentation of underwater imagery and consists of over 1500 images with pixel annotations. It covers eight object categories, including fish, reefs, aquatic plants, wrecks/ruins, human divers, robots, and sea-floor.

### Dataset Categories and Labels

- **Background (waterbody):** BW (RGB Code: 000 - black)
- **Human divers:** HD (RGB Code: 001 - blue)
- **Aquatic plants and sea-grass:** PF (RGB Code: 010 - green)
- **Wrecks and ruins:** WR (RGB Code: 011 - sky)
- **Robots (AUVs/ROVs/instruments):** RO (RGB Code: 100 - red)
- **Reefs and invertebrates:** RI (RGB Code: 101 - pink)
- **Fish and vertebrates:** FV (RGB Code: 110 - yellow)
- **Sea-floor and rocks:** SR (RGB Code: 111 - white)

### Dataset Resolution

All images are of variable resolution, allowing benchmarking purposes. Sizes of (320x240) or (320x256) can be used as mentioned in the accompanying paper.

### Test Set

The dataset includes a test set of 110 images for evaluation purposes.

### Benchmarking

The SUIM dataset serves as a benchmark dataset for underwater image segmentation, offering a diverse range of objects and scenarios.

## Kaggle API Usage Guide

For convenient access to the dataset, you can use the Kaggle API. If you are using Google Colab or any other environment that supports Kaggle API, follow the steps below:

1. **Upload Kaggle API Key:**
   - Obtain your Kaggle API key from your Kaggle account settings and upload it to your Colab environment.

2. **Install Kaggle Python Package:**
   - Install the Kaggle package using the command: `!pip install kaggle`

3. **Download and Unzip the Dataset:**
   - Download the SUIM dataset using the Kaggle API: `!kaggle datasets download -d ashish2001/semantic-segmentation-of-underwater-imagery-suim`
   - Unzip the downloaded dataset: `!unzip semantic-segmentation-of-underwater-imagery-suim.zip`

## Usage in Other Environments:

If you are not using Google Colab, you can manually download the dataset from the [Kaggle website](https://www.kaggle.com/datasets/ashish2001/semantic-segmentation-of-underwater-imagery-suim). After downloading the dataset, unzip it and use it in your code.

