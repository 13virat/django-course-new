from django.shortcuts import render
# from django.http import HttpResponse 

# Create your views here.
def index(request):
    # return HttpResponse("hello world")
    my_dict={'insert_me':"hello world"}
    return render(request, "firstapp/index.html",context=my_dict)
    
