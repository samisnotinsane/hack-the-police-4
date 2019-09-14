from street_level_crimes.models import StreetCrime

import requests

def get_street_crimes(latitude, longitude, date):
    url = 'https://data.police.uk/api/crimes-street/all-crime'
    params = {'lat': latitude, 'lng': longitude, 'date': date}
    r = requests.get(url, params=params)
    crimes = r.json()
    crimes_list = []
    for i in range(len(crimes)):
        crimes_list.append(crimes[i])
    return crimes_list

def post_crime_categories(json_data):
    r = requests.post("http://bugs.python.org", data=json_data) # Example URL
    print(r.status_code, r.reason)
