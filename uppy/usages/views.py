from django.shortcuts import render

# Create your views here.


def usageHome(request):
    return render(request, 'usage/usage-base.html')

def disk(request):
    return render(request, 'usage/disk.html')