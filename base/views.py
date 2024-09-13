from django.shortcuts import render
from base.models import Customer
from base.serializers import CustomerSerializer
from rest_framework import viewsets
from .models import User
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    @action(detail=False, methods=['post'], url_path='register')
    def register(self, request):
                user = User.objects.create_user(
                username=request.data['username'],
                password=request.data['password']
            )
                user.is_active = True
                user.is_staff = False
                user.save()
                name = request.data['name']
                city = request.data['city'] 
                age = request.data['age'] 
                customer = Customer.objects.create(user=user,name=name,city=city,age=age)
                customer.save()
                return Response({"message": "Customer registered successfully."}, status=status.HTTP_201_CREATED)
            


