from django.db import models
from django.utils import timezone

class Prompt(models.Model):

    class Meta:
        ordering = ['prompt_id']

    prompt_id = models.CharField(max_length=255, unique=True)
    prompt_type = models.CharField(max_length=255)
    prompt = models.TextField()


    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        return super(Prompt, self).save(*args, **kwargs)

    def __str__(self):
        return self.prompt_id