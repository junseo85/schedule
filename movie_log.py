import pandas as pd

def movie_log():
    #import text file
    dataframe1 = pd.read_csv("database.txt")
    df = pd.DataFrame(dataframe1)
    print(df)
    #sort by 'My score'
    sorted = df.sort_values(by=["My Score"], ascending=[False],inplace=True)
    print("responding with data")
    print(df)
    #return the sorted items to "database.csv"
    df.to_csv("database.csv")

def microservice_request():
    print("request received")

    #make a request

    movie_log()
request_data = input("Would you like to requst data? answer 'yes' or 'no' :")

if request_data == 'yes':
    microservice_request()