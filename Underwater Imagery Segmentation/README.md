## Project Overview
This project encompasses a comprehensive analysis of underwater imagery segmentation

## Data Analysis

After importing the dataset and setting the necessary paths, an in-depth analysis of the images and masks was conducted, employing various transformative techniques. These transformations aimed at providing insights into the visual characteristics of the underwater imagery and enhancing features crucial for subsequent segmentation tasks.


### Object and Mask Transformations

- Object Mask Isolation
This transformation isolates parts of the object present in the mask, setting the rest to 0. It proves beneficial in highlighting specific regions based on a mask.
```python
copy_object[example_mask == 0] = 0
```

- Background Highlighting
In this transformation, pixel values are set to 255 in regions where the mask is 0, effectively highlighting the background or areas outside the object.
```python
copy_object[example_mask == 0] = 255
```

- Object Removal
Here, pixel values are set to 0 in regions where the mask is 255, effectively removing parts of the object covered by the mask.
```python
copy_object[example_mask == 255] = 0
```


### Binary Mask Creation

- Object Presence Binary Mask
This step involves creating a binary mask that highlights regions in the red channel where the object is present. Pixel values of 255 represent the presence of an object or a region of interest in binary masks.
```python
binary_mask = example_mask[:, :, 0] == 255
```


### Color Space Analysis

- RGB Color Space 3D Visualization
A 3D scatter plot was generated to explore the RGB color space, emphasizing the color distribution of the object. The plot provides insights into the relationships between the Red, Green, and Blue channels.
```python
Normalize_I.autoscale(Pixel_Colors_I)
```

- Channel-wise Difference Visualization
This analysis highlights areas where the blue channel has been modified or transformed, aiding in understanding the impact of specific color channels on the object's overall appearance.
```python
OBJECT_PATH_TRANS = COPY_OBJECT[:,:,0] - Blue_I
```

- Color Channel Difference Visualization
This represents the difference in pixel values between the blue channel of the copied object and the combined intensity of the red and blue channels in the original object, revealing specific color variations.
```python
OBJECT_PATH_TRANS = COPY_OBJECT[:,:,0] - (Red_I + Blue_I)
```

- Channel-wise Difference in Total Intensity
This transformation highlights specific characteristics or variations in the blue channel that are not accounted for in the total color intensity of the original object.
```python
OBJECT_PATH_TRANS = COPY_OBJECT[:,:,0] - (Red_I + Green_I + Blue_I)
```

- Green Channel vs. Red Channel
The difference between the green channel of the copied object and the red channel of the original object is visualized, providing insights into specific variations in these channels.
```python
OBJECT_PATH_TRANS = COPY_OBJECT[:,:,1] - Red_I
```

- Green Channel vs. Blue Channel
Similarly, the difference between the green channel of the copied object and the blue channel of the original object is examined.
```python
OBJECT_PATH_TRANS = COPY_OBJECT[:,:,1] - Blue_I
```


### Sub Layer Manipulation

- Sub Layer Mask 
This transformation highlights pixels where the blue channel in the copied object matches the green channel in the original object, offering insights into specific features.
```python
OBJECT_PATH_TRANS = COPY_OBJECT[:,:,0] == Green_I
```

- Emphasizing Red Channel in Mask
This operation isolates and displays only the red channel of the mask, emphasizing information in that channel.
```python
COPY_MASK[:, :, 0] = 0
COPY_MASK[:, :, 1] = 0
```

- Highlighting Object Regions with Mask Value of 0
This transformation highlights areas in the object image where the mask has a value of 0 by setting those areas to black.
```python
COPY_OBJECT[EXAMPLE_MASK == 0] = BLACK_COLOR_CODE
```


### HSV Color Space Analysis

- Blue Region Isolation in Object Image
By converting the object image to the HSV color space and creating a binary blue mask based on specified HSV ranges, this transformation isolates blue regions in the object image.
```python
BLUE_MASK = cv2.inRange(EXAMPLE_OBJECT_HSV, LOWER_BLUE, UPPER_BLUE)
RESULT_IMAGE_EXAMPLE = cv2.bitwise_and(EXAMPLE_OBJECT_RGB, EXAMPLE_OBJECT_RGB, mask=BLUE_MASK)
```


### Blending Object and Mask
The blending operation is controlled by the weights assigned to the object and mask images. In this case, the object contributes 60%, the mask contributes 40%, and a gamma factor of 0.5 is applied, resulting in a blended image.
```python
ADD_IMAGE = cv2.addWeighted(EXAMPLE_OBJECT, 0.6, EXAMPLE_MASK, 0.4, 0.5)
```



## Preprocessing and Model Training

The dataset undergoes transformations to prepare it for model training. Three lists (MASK_MAIN_TRANSFORMATION, OBJECT_MAIN_TRANSFORMATION, and ADD_MAIN_TRANSFORMATION) are populated, each containing corresponding transformed images.

### Model 1
The first model is an autoencoder designed for image denoising. It consists of convolutional and max-pooling layers in the encoder and mirrored layers in the decoder. The model is trained for 5 epochs.

```python
# Model 1: Autoencoder for Image Denoising
autoencoder = build_autoencoder()
history = autoencoder.fit(X_train, y_train, epochs=5, batch_size=32, shuffle=True, validation_data=(X_val, y_val))
```

### Model 2
The second model is similar to Model 1 but is trained on blended images (object and mask). It follows the same architecture and is trained for 5 epochs.

```python
# Model 2: Autoencoder for Blended Image Generation
autoencoder2 = build_autoencoder()
history = autoencoder2.fit(X_train, y_train, epochs=5, batch_size=32, shuffle=True, validation_data=(X_val, y_val))
```

### Model 3
Model 3 is a custom autoencoder with a more complex architecture consisting of convolutional and batch normalization layers. It is trained using binary cross-entropy loss for 5 epochs.

```python
# Model 3: Custom Autoencoder with Complex Architecture
Auto_Encoder3 = Sequential([E_AE, D_AE])
Auto_Encoder3.compile(loss="binary_crossentropy", optimizer=Adam(lr=0.00001), metrics=["mse"])
Model_AutoEncoder3 = Auto_Encoder3.fit(Transformation_Image, Transformation_Add, epochs=5, callbacks=[Checkpoint_Model])
```

### Model 4
Model 4 is another custom autoencoder designed for segmentation tasks. It uses convolutional and batch normalization layers. The model is trained using binary cross-entropy loss for 20 epochs.

```python
# Model 4: Custom Autoencoder for Segmentation
Encoder_B = Sequential([...])
Decoder_B = Sequential([...])
Auto_Encoder4 = Sequential([Encoder_B, Decoder_B])
Auto_Encoder4.compile(loss="binary_crossentropy", optimizer=Adam(lr=0.000001), metrics=["mse"])
Model_AutoEncoder4 = Auto_Encoder4.fit(Transformation_Image, Transformation_Mask, epochs=20, callbacks=[Checkpoint_Model])
```