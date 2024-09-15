from django.shortcuts import render
from base.models import Customer, Book
from base.serializers import BookSerializer, CustomerSerializer
from .models import User, Customer, Book
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import logout


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

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def create(self, request):
        # return Response({"is_admin" : request.user.username})
        if not request.user.is_superuser:
            return Response({"error": "You do not have permission to create a new book."},
                status=status.HTTP_403_FORBIDDEN)
        return super().create(request)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['id'] = user.id
        token['is_superuser'] = user.is_superuser
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def logout_user(request):
    logout(request)
    return Response({"message": "User logged out successfully."}, status=status.HTTP_200_OK)
            


