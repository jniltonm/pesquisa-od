import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xuvnzyzgtdfzkfhpunsd.supabase.co';
// Utilizando a chave pública (publishable key) fornecida
const supabaseKey = 'sb_publishable_kmaozF-wvQqA-NNfPbhFVQ_FwrTU4-5';

export const supabase = createClient(supabaseUrl, supabaseKey);
