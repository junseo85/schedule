from subprocess import call

def open_py_file():
    #export data from Mongo DB to JSON file
    call(["python","micro_request.py"])
def partner_microservice():
    #read JSON file created by "micro_request" python file then create
    # new JSON file with different element("OPEN" or "BLOCK")
    call(["python","MakeCalendar.py"])
def name_microservice():
    #read JSON file and creat new JSON file to view calendar view with name.
    call(["python","Calendar_name.py"])
while True:
    open_py_file()
    partner_microservice()
    name_microservice()