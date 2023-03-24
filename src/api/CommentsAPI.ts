import { host } from '.';
import { CommentInterface, CommentLabel } from '../types/comments';

interface CommentUpdates {
  votes?: number;
  spoiler?: boolean;
  text?: string;
  label?: CommentLabel | null;
}
type ApiResponse = Promise<{ rows: CommentInterface[]; count: number }>;

export class CommentsAPI {
  static async getComments(id: string, query?: string): ApiResponse {
    const { data } = await host.get(`/kata/${id}/discuss${query || ''}`);
    return data;
  }

  static async getUserComments(id: string): ApiResponse {
    const { data } = await host.get(`/discuss/${id}`);
    return data;
  }

  static async create(
    id: string,
    comment: Omit<CommentInterface, 'id' | 'kataId' | 'votes' | 'createdAt' | 'spoiler'>
  ): Promise<CommentInterface> {
    const { data } = await host.post(`/kata/${id}/discuss`, comment);
    return data;
  }

  static async update(id: string, commentId: number, comment: CommentUpdates) {
    const { data } = await host.patch(`/kata/${id}/discuss/${commentId}`, comment);
    return data;
  }

  static async delete(id: string, commentId: number) {
    const { data } = await host.delete(`/kata/${id}/discuss/${commentId}`);
    return data;
  }
}
