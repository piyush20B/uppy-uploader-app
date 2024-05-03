from django.shortcuts import render

# Create your views here.


def disk(request):
    return render(request, 'usage/disk.html')