<h1>Employee Attendance System using Face Recognition</h1><br>
This project implements an Employee Attendance System using Face Recognition technology. The system allows employers to efficiently track the attendance of employees using facial recognition techniques.

Features
Face Detection: Utilizes advanced face detection algorithms and face-api.js to identify individuals accurately.
Attendance Tracking: Records attendance automatically based on recognized faces.<br>
System Architecture
The system comprises the following components:

Face Detection Module: Responsible for detecting faces in images or video streams.
Face Recognition Module: Matches detected faces against known employee faces to identify individuals.
Attendance Management Module: Tracks attendance records based on recognized faces and timestamps.
User Interface: Provides interfaces for employees to check in and out, and for administrators to monitor attendance records and manage system settings.
Technologies Used
Face-api.js  : Utilized for face detection and recognition algorithms.
Javascript  : Used as the primary programming language for system implementation.
Node.js : Employed for developing a web-based interface for administrators and employees to interact with the system.
Database (mongodb): Stores employee information and attendance records securely.<br>

Getting Started<br>
To set up the Employee Attendance System:<br>
1. Open the "Employee-management-using-face-recognisation" folder as your root directory.
2. Install the required dependencies specified in the package.json file.
3. Configure the system settings, including database connection and face recognition models.
4. Run the server.js file present in src directory by typing -
   cd src
   node server.js  or  npm run dev
5. Click on the link of local host to open the application in your browser
6. To use the application -
   -Register with your details.
   -Upload your face profile.
   -Get started with the model.
   <br>
Usage
Employee Check-In: Employees can check in by standing in front of the camera, and the system will automatically recognize their faces and record their attendance.
Employee Records: Employees and administrators can view their attendance history and manage their profiles through the system interface.
Contributing
Contributions to the Employee Attendance System project are welcome! Please refer to the contribution guidelines for detailed instructions on how to contribute to the project.
<br>
License
This project is licensed under the MIT License.
<br>
Acknowledgements
We would like to express our gratitude to the developers of Face-api.js and other ML5.js libraries that made this project possible.

