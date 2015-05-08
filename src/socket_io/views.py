from django.shortcuts import render


# Create your views here.
def socket(request):
    context = {}
    template = 'socket/index.html'
    return render(request, template, context)