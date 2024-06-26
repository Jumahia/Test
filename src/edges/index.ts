import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
    { id: "a->c", source: "a", target: "c", animated: true },
    { id: "a->d", source: "a", target: "d" },
    { id: "a->b", source: "a", target: "b" },
    { id: "b->d", source: "b", target: "d" },
    { id: "b->e", source: "b", target: "e" },
    { id: "c->d", source: "c", target: "d", animated: true },
    { id: "c->f", source: "c", target: "f" },
    { id: "c->g", source: "c", target: "g" },
    { id: "d->e", source: "d", target: "e", animated: true },
    { id: "d->h", source: "d", target: "h" },
    { id: "e->i", source: "e", target: "i" },
    { id: "e->j", source: "e", target: "j", animated: true },
    { id: "f->k", source: "f", target: "k" },
    { id: "f->l", source: "f", target: "l", animated: true },
    { id: "g->m", source: "g", target: "m" },
    { id: "g->n", source: "g", target: "n", animated: true },
    { id: "h->o", source: "h", target: "o" },
    { id: "h->p", source: "h", target: "p", animated: true },
    { id: "i->q", source: "i", target: "q" },
    { id: "i->r", source: "i", target: "r", animated: true },
    { id: "j->s", source: "j", target: "s" },
    { id: "j->t", source: "j", target: "t", animated: true },
    { id: "k->u", source: "k", target: "u" },
    { id: "k->v", source: "k", target: "v", animated: true },
    { id: "l->w", source: "l", target: "w" },
    { id: "l->x", source: "l", target: "x", animated: true },
    { id: "m->y", source: "m", target: "y" },
    { id: "m->z", source: "m", target: "z", animated: true },
    { id: "n->aa", source: "n", target: "aa" },
    { id: "n->ab", source: "n", target: "ab", animated: true },
    { id: "o->ac", source: "o", target: "ac" },
    { id: "o->ad", source: "o", target: "ad", animated: true },
    { id: "p->ae", source: "p", target: "ae" },
    { id: "p->af", source: "p", target: "af", animated: true },
    { id: "q->ag", source: "q", target: "ag" },
    { id: "q->ah", source: "q", target: "ah", animated: true },
    { id: "r->ai", source: "r", target: "ai" },
    { id: "r->aj", source: "r", target: "aj", animated: true },
    { id: "s->ak", source: "s", target: "ak" },
    { id: "s->al", source: "s", target: "al", animated: true },
    { id: "t->am", source: "t", target: "am" },
    { id: "t->an", source: "t", target: "an", animated: true },
    { id: "u->ao", source: "u", target: "ao" },
    { id: "u->ap", source: "u", target: "ap", animated: true },
    { id: "v->aq", source: "v", target: "aq" },
    { id: "v->ar", source: "v", target: "ar", animated: true },
    { id: "w->as", source: "w", target: "as" },
    { id: "w->at", source: "w", target: "at", animated: true },
    { id: "x->au", source: "x", target: "au" },
    { id: "x->av", source: "x", target: "av", animated: true },
    { id: "y->aw", source: "y", target: "aw" },
    { id: "y->ax", source: "y", target: "ax", animated: true },
    { id: "z->ay", source: "z", target: "ay" },
    { id: "z->az", source: "z", target: "az", animated: true }
  
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
