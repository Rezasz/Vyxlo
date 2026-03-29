import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Document } from '../../types/document';

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  if (documents.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-charcoal-border" />
        <h3 className="mt-2 text-sm font-medium text-charcoal">No documents found</h3>
        <p className="mt-1 text-sm text-charcoal-muted">
          Documents will appear here once added
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gold">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">{doc.title}</h3>
              <p className="text-charcoal-muted mb-4">{doc.brief}</p>
              <p className="text-sm text-charcoal-muted">
                Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}
              </p>
            </div>
            <a
              href={doc.fileUrl}
              download={doc.fileName}
              className="inline-flex items-center text-gold hover:text-gold-dark"
              title="Download document"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
