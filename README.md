# QUOD

Helping police officers gather intelligence and act on nearby crimes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You will need the following:
- python
- pip
- django
- requests
- cv2
- numpy
- [face_recognition](https://github.com/ageitgey/face_recognition#installation-options)

Important: to use face recognition, before installing it, you need to install dlib using [this link](https://gist.github.com/ageitgey/629d75c1baac34dfa5ca2a1928a7aeaf). Only then, do:
```
pip3 install face_recognition
```

### Installing

Clone the project, making sure you have installed or already have installed the prerequisites above. 


```
git clone https://github.com/samisnotinsane/hack-the-police-4.git
cd hack-the-police
```

## Running 


Run the webserver using Django

```
python manage.py runserver
```

You may see a warning in red which states the following. You may ignore this safely. 

```
You have 17 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
```

In your browser, navigate to the following URL to open the frontend:

```
http://127.0.0.1:8000/
```

## Built With

* [Django](https://www.djangoproject.com/) - The python based web framework
* [face-recognition](https://github.com/ageitgey/face_recognition) - Python library for face recognition
* [Bootstrap](https://getbootstrap.com/) - Frontend components
* [ArcGIS](https://www.arcgis.com/index.html) - Map for crime hotspots

## Authors

* **Sameen Islam** - [samisnotinsane](https://github.com/samisnotinsane)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Justin Grierson** - [https://github.com/ju3tin](https://github.com/ju3tin) for contributing to make the ArcGIS map and php script for integration with the CLUE API.
