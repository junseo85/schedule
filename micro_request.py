import  json
from urllib.request import urlopen
#import json data from url link
url = "http://localhost:9000/Students"
response = urlopen(url)
data = json.loads(response.read())

# print (data)
#create json file
with open("schedule.students.json", "w") as file:
    json.dump(data,file)