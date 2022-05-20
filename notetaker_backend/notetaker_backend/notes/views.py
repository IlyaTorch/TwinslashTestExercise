from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView

from notes.models import Note
from notes.serializers import NoteSerializer


class NoteListCreateAPIView(ListCreateAPIView):
    """View for listing all notes and for creating new ones"""

    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class NoteUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """View for CRUD operations with a single note"""

    serializer_class = NoteSerializer
    lookup_url_kwarg = 'note_id'
    queryset = Note.objects.all()
