from django.shortcuts import render

# Create your views here.


def search_ultra(request):
    process = request.GET.get('query', '')
    return render(request, 'home/ult-search.html', context={'query': process})

def search(request):
    process = request.GET.get('query', '')
    return render(request, 'home/search.html', context={'query': process})

def index(request):
    return render(request, 'home/index.html')

def about(request):
    return render(request, 'home/about.html')

def favourites(request):
    return render(request, 'home/favourites.html')

def profile(request, user):
    context = {'user': user}
    return render(request, 'home/profile.html', context=context)

def contact(request):
    return render(request, 'home/contact.html')

def settings(request):
    return render(request, 'home/settings.html')

def viewer(request):
    return render(request, 'home/viewer.html')