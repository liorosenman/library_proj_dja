from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, BookViewSet
from rest_framework_simplejwt.views import TokenObtainPairView
from base import views
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view()),
    path('logout_user/', views.logout_user, name='logout'),
    # path('register/', views.register)
    
] 

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
