from datetime import date, timezone
import enum
from django.db import models
from django.contrib.auth.models import User
from django.db import models

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.user.username
    
class BookType(enum.Enum):
    TYPE_1 = 10  
    TYPE_2 = 5   
    TYPE_3 = 2

class BookStatus(enum.Enum):
     AVAILABLE = "available"
     LOANED = "loaned"
     ERASED = "erased"

BOOK_TYPE_CHOICES = [
    (BookType.TYPE_1.value, 'Type_1'),
    (BookType.TYPE_2.value, 'Type_2'),
    (BookType.TYPE_3.value, 'Type_3'),
]

BOOK_STATUS_CHOICES = [
    (BookStatus.AVAILABLE.value, 'Available'),
    (BookStatus.LOANED.value, 'Loaned'),
    (BookStatus.ERASED.value, 'Erased'),
]

class Book(models.Model):
    name = models.CharField(max_length=200, null=False)
    author = models.CharField(max_length=200, null=False)
    year_published = models.IntegerField(null=False)
    borrow_time = models.IntegerField(choices=BOOK_TYPE_CHOICES, default=BookType.TYPE_1.value)
    filename = models.ImageField(upload_to='book_images/', null=False, blank=True)
    status = models.CharField(choices=BOOK_STATUS_CHOICES, default=BookStatus.AVAILABLE.value, null=False, max_length=20)

    def __str__(self):
        return f"{self.name} by {self.author}, Status: {self.status}"
    
class Loan(models.Model):
    cust = models.ForeignKey(Customer, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    loan_date = models.DateField(default=date.today())
    return_date = models.DateField(null=False, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"Loan of {self.book.name} to {self.cust_id} on {self.loan_date}"


