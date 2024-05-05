from django.shortcuts import render

# Create your views here.

def chat(request):
    return render(request, 'home/chat.html')

def chat_popup_api(request):
    return render(request, 'home/chat.html')