from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet
from rest_framework_simplejwt.views import TokenObtainPairView
from base import views


router = DefaultRouter()
router.register(r'customers', CustomerViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view()),
    path('logout_user/', views.logout_user, name='logout'),
]
