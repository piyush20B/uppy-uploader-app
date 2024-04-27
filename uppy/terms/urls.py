from django.urls import path
from . import views

urlpatterns = [
    path('terms-and-conditions/', views.termsAndConditions, name='termsAndConditions'),
    path('privacy/', views.privacy, name='privacy'),
]