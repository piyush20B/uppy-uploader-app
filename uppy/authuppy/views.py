from django.shortcuts import render, redirect
from django.contrib.auth import login, logout

# Create your views here.


def signup(request):
    return render(request, 'auth/signup.html')


def login(request):
    return render(request, 'auth/login.html')


def logout(request):
    logout(request)
    redirect('home')


def forgetPass(request):
    return render(request, 'auth/forget-password.html')


def resetPass(request):
    return render(request, 'auth/reset-password.html')

