import type { NextApiRequest, NextApiResponse } from 'next'
import { Player } from '../../models/player';
import { getKnex } from '../../knex'
import { firebaseAdmin } from '../../auth/firebaseAdmin';
//import { verifyIdToken } from '../utils/auth/firebaseAdmin'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.token as string;
  try {
    await firebaseAdmin
      .auth()
      .verifyIdToken(token);
    const knex = getKnex()
    const listPlayers: Player[] = await knex('player')
    res.status(200).json(listPlayers);
  } catch (error) {
    console.error(error);
    return res.status(401).send('You are unauthorized')
  }

}
