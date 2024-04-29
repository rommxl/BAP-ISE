from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
import numpy as np
import json
import requests

# Create your views here.
df = pd.read_csv('core/data.csv')
df['Description'] = df['Description'].str.lower()
df.dropna(inplace=True)

def filter_csv(request):
    if(request.method == 'POST'):
        search = json.loads(request.body.decode('utf-8'))
        # print(search)
        new_df = df.copy()
        new_df['Date'] = pd.to_datetime(new_df['Date'], format='%d/%m/%Y')

        for param in search.keys():
            print(f"When {param} is {search[param]}")
            if(search[param] == None or (type(search[param])!=int and len(search[param]) == 0)):
                continue
            if(param == 'Description'):
                new_df = new_df[new_df['Description'].str.contains(search[param])]
            if(param == 'Lab'):
                # if(search[param] == None):
                #     continue
                # else:
                new_df = new_df[new_df['Lab'] == (search[param])]
            if(param == 'Date'):
                new_df = new_df[new_df['Date'] >= pd.to_datetime(search['Date'], format='%m/%Y')]
            # if(param == 'Product Type'):
            #     if(search[param] == None):
            #         continue
            else:
                new_df = new_df[new_df[param] == search[param]]
        # print(new_df)
        return JsonResponse(new_df.to_dict())
    
def get_piechart_data(df: pd.DataFrame, group_by, aggregate_col):
    pie_data = df.groupby(group_by)[aggregate_col].mean()

    pie_data_vis = []
    for i,slice in enumerate(pie_data.to_dict().keys()):
        pie_data_vis.append({"id":i,"value":pie_data[slice],"label":slice})
    return (pie_data_vis)

def visualize(request):
    if(request.method == 'POST'):
        data = json.loads(request.body.decode('utf-8'))
        df = pd.DataFrame(data)
        avg_product_cost_vis = get_piechart_data(df,'Product Type','Amount')
        # avg_product_cost = df.groupby('Product Type')['Amount'].mean()

        # avg_product_cost_vis = []
        # for i,slice in enumerate(avg_product_cost.to_dict().keys()):
        #     avg_product_cost_vis.append({"id":i,"value":avg_product_cost[slice],"label":slice})
        # print(avg_product_cost_vis)
    return JsonResponse({"avg_product_cost":avg_product_cost_vis})