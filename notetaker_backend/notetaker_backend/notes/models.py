from datetime import date

from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=30)
    text = models.TextField(max_length=500, blank=True)
    updated_at = models.DateField(default=date.today)
