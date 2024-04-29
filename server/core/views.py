from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
import numpy as np
import json
import requests

# Create your views here.
df = pd.read_csv('core/data.csv')
df.dropna(inplace=True)

def filter_csv(request):
    if(request.method == 'POST'):
        search = json.loads(request.body.decode('utf-8'))
        print(search)
        new_df = df.copy()
        new_df['Date'] = pd.to_datetime(new_df['Date'], format='%d/%m/%Y')

        for param in search.keys():
            print(f"When {param} is {search[param]}")
            if(search[param] == None or type(search[param])==int or len(search[param]) == 0):
                continue
            if(param == 'Description'):
                new_df = new_df[new_df['Description'].str.contains(search[param])]
            if(param == 'Lab'):
                if(search[param] == None):
                    continue
                else:
                    new_df = new_df[new_df['Lab'] == int(search[param])]
            if(param == 'Date'):
                new_df = new_df[new_df['Date'] >= pd.to_datetime(search['Date'], format='%m/%Y')]
            # if(param == 'Product Type'):
            #     if(search[param] == None):
            #         continue
            else:
                new_df = new_df[new_df[param] == search[param]]
        print(new_df)
        return JsonResponse(new_df.to_dict())