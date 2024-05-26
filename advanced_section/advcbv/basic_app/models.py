from django.db import models

# Create your models here.
class School(models.Model):
    name=models.CharField(max_length=264,unique=True)
    principal=models.CharField(max_length=264,unique=True)
    location=models.CharField(max_length=264,unique=True)
    def __str__(self):
        return self.name
    

class Student(models.Model):
    name=models.CharField(max_length=264,unique=True)
    age=models.PositiveIntegerField()
    school=models.ForeignKey(School,on_delete=models.CASCADE,related_name='students')

    def __str__(self):
        return self.name
