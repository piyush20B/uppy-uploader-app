from django.urls import path
from . import views

urlpatterns = [
    path('', views.usageHome, name='usageHome'),
    path('diskusage/', views.disk, name='disk-usage'),
]