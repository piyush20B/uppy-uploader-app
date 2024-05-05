from django.urls import path
from . import views

urlpatterns =[
    path('', views.chat, name='chat'),
    path('uppy-chat-api/', views.chat_popup_api, name='chat-popup'),
]