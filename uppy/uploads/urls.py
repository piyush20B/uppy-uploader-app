from django.urls import path
from . import views

urlpatterns = [
    path('', views.upload, name='uploads-view'),
    path('file/', views.upload_api, name='upload-files'),
]