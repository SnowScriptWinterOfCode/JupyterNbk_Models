# EuroSAT RGB Dataset

## Dataset

The EuroSAT RGB dataset is a collection of satellite images covering 10 different land cover classes. It is available on Kaggle, and you can access it using the following link: [EuroSAT RGB Dataset](https://www.kaggle.com/datasets/nilesh789/eurosat-rgb).

## Kaggle API Usage Guide

If you're using Google Colab or any other environment that supports Kaggle API, you can easily download and use the EuroSAT RGB dataset. (This is used in the code present in Model section). Follow the steps below:

1. **Upload Kaggle API Key:**
    - Obtain your Kaggle API key by going to your Kaggle account settings. Download the key as a JSON file.

    - Use the following code to upload the Kaggle API key to your Colab environment:
        ```python
        from google.colab import files

        # Upload the Kaggle API key JSON file that you obtained from your Kaggle account
        uploaded = files.upload()

        # Move the uploaded file to the appropriate directory
        !mkdir -p ~/.kaggle
        !mv kaggle.json ~/.kaggle/
        !chmod 600 ~/.kaggle/kaggle.json
        ```

2. **Install Kaggle Python Package:**
    - Install the Kaggle package using the following command:
        ```python
        !pip install kaggle
        ```

3. **Download and Unzip the Dataset:**
    - Download the EuroSAT RGB dataset using the Kaggle API with the command:
        ```python
        !kaggle datasets download -d nilesh789/eurosat-rgb
        ```

    - Unzip the downloaded dataset:
        ```python
        !unzip eurosat-rgb.zip
        ```

## Usage in Other Environments:

If you are not using Google Colab, you can manually download the dataset from the Kaggle website. You can simply download the dataset from the link provided above. After downloading the dataset, you can unzip it use in your code.
        ```

Now, you have successfully acquired and set up the EuroSAT RGB dataset for the project. Adjust the file paths accordingly based on your coding environment.
