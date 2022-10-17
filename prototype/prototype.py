import streamlit as st
import pandas as pd
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

def tweak_df(json):
    raw = pd.DataFrame(json)
    return (raw
            .rename(columns={'geocoordX': 'lon', 'geocoordY': 'lat'})
            .dropna(subset=['lat', 'lon'])
            )

session = requests.Session()

st.write('Hello World')

headers = {'DB-Client-Id': ID, 'DB-Api-Key': KEY}
data = fetch(session, 'https://apis.deutschebahn.com/db-api-marketplace/apis/fasta/v2/facilities', headers=headers)

df = tweak_df(data)

st.map(df)

# fancier version not working yet
# st.pydeck_chart(pdk.Deck(
#     map_style=None,
#     initial_view_state=pdk.ViewState(
#         latitude=52.5,
#         longitude=13.4,
#         zoom=10,
#         pitch=50,
#     ),
#     layers=[
#         pdk.Layer(
#             'ScatterplotLayer',
#             data=df,
#             get_position='[lon, lat]',
#             get_color='[200, 30, 0, 160]',
#             get_radius=200,
#         )
#     ],
# ))
