import streamlit as st
import pandas
import requests
import configparser

config = configparser.ConfigParser()
config.read('config.ini')
ID = config['API']['ID']
KEY = config['API']['KEY']

st.set_page_config(page_title="Elevate", page_icon="🛗")

def fetch(session, url, headers):
    try:
        result = session.get(url, headers=headers)
        return result.json()
    except Exception:
        return {}

session = requests.Session()

st.write('Hello World')

headers = {'DB-Client-Id': ID, 'DB-Api-Key': KEY}
data = fetch(session, 'https://apis.deutschebahn.com/db-api-marketplace/apis/fasta/v2/facilities', headers=headers)

st.write(data)
