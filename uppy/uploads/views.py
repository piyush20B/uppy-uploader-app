from django.shortcuts import render

# Create your views here.


def upload(request):
    return render(request, 'uploads/all-uploads.html')

def upload_api(request):
    return render(request, 'uploads/upload.html')