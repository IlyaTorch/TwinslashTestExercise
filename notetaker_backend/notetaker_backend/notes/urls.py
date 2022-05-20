from django.urls import path

from notes.views import NoteUpdateDestroyAPIView, NoteListCreateAPIView


urlpatterns = [
    path('notes/', NoteListCreateAPIView.as_view(), name='list-create-note'),
    path('notes/<int:note_id>', NoteUpdateDestroyAPIView.as_view(), name='update-destroy-note'),
]
