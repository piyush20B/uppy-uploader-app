from django.urls import path
from . import views

urlpatterns = [
    path('diskusage/', views.disk, name='disk-usage'),
]